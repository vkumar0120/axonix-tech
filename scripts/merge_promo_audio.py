from pathlib import Path
import shutil
import subprocess
import sys

root = Path(__file__).resolve().parents[1]
public_dir = root / 'public'
output = public_dir / 'axonix-promo.mp4'

video_candidates = sorted(
    public_dir.glob('*.mp4'),
    key=lambda p: (p.name != 'axonix-promo.mp4', p.name.lower()),
)
video_path = next((p for p in video_candidates if p.name != 'axonix-promo.mp4'), None)
audio_path = next(iter(sorted(public_dir.glob('*.m4a'))), None)

if video_path is None or audio_path is None:
    raise FileNotFoundError(f'Missing required media files. Video found: {video_path}, Audio found: {audio_path}')

ffmpeg = shutil.which('ffmpeg')
if ffmpeg is None:
    windows_candidates = [
        r'C:\ffmpeg\bin\ffmpeg.exe',
        r'C:\Program Files\ffmpeg\bin\ffmpeg.exe',
        r'C:\Program Files (x86)\ffmpeg\bin\ffmpeg.exe',
        r'C:\Users\ADMIN\AppData\Local\Python\pythoncore-3.14-64\Lib\site-packages\imageio_ffmpeg\binaries\ffmpeg-win-x86_64-v7.1.exe',
    ]
    for candidate in windows_candidates:
        if Path(candidate).exists():
            ffmpeg = candidate
            break

if not ffmpeg:
    raise FileNotFoundError('ffmpeg not found in PATH or common Windows install locations.')

cmd = [
    ffmpeg,
    '-y',
    '-i', str(video_path),
    '-i', str(audio_path),
    '-map', '0:v:0',
    '-map', '1:a:0',
    '-c:v', 'libx264',
    '-preset', 'veryfast',
    '-crf', '22',
    '-c:a', 'aac',
    '-movflags', '+faststart',
    str(output),
]

print('Combining:')
print(f'  Video: {video_path.name}')
print(f'  Audio: {audio_path.name}')
print(f'  Output: {output.name}')
subprocess.run(cmd, check=True)
print(f'Successfully created {output}')
