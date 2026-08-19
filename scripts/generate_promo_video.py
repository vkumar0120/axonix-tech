import subprocess
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

root = Path(__file__).resolve().parents[1]
public_dir = root / 'public'
mp4_path = public_dir / 'axonix-promo.mp4'
poster_path = public_dir / 'axonix-promo-poster.png'
public_dir.mkdir(parents=True, exist_ok=True)

ffmpeg = r'C:\Users\ADMIN\AppData\Local\Python\pythoncore-3.14-64\Lib\site-packages\imageio_ffmpeg\binaries\ffmpeg-win-x86_64-v7.1.exe'


def create_poster():
    width, height = 1280, 720
    img = Image.new('RGBA', (width, height), (4, 15, 24, 255))
    draw = ImageDraw.Draw(img)

    for y in range(0, height + 1, 24):
        draw.rectangle((0, y, width, y + 12), fill=(10, 27, 38, 255))

    glow = Image.new('RGBA', (width, height), (0, 0, 0, 0))
    gdraw = ImageDraw.Draw(glow)
    gdraw.rounded_rectangle((60, 50, 1210, 660), radius=32, fill=(8, 17, 26, 220))
    gdraw.rounded_rectangle((120, 140, 560, 550), radius=28, fill=(9, 28, 38, 200))
    gdraw.rounded_rectangle((585, 150, 1180, 540), radius=30, fill=(12, 23, 32, 220))
    img = Image.alpha_composite(img, glow)
    draw = ImageDraw.Draw(img)

    # Abstract left-side technology graphic without the previous low-quality human figure.
    center_x = 350
    center_y = 300
    for radius in (120, 170, 220, 270):
        draw.ellipse(
            (center_x - radius, center_y - radius, center_x + radius, center_y + radius),
            outline=(84, 216, 255, 180),
            width=3,
        )

    draw.rounded_rectangle((180, 215, 500, 410), radius=28, fill=(6, 22, 31, 220))
    draw.rounded_rectangle((260, 290, 420, 450), radius=20, fill=(12, 36, 47, 220))
    draw.rectangle((220, 430, 470, 500), fill=(18, 130, 210, 255))
    draw.rectangle((250, 210, 545, 250), fill=(12, 170, 200, 90))
    draw.rectangle((120, 470, 600, 600), fill=(8, 187, 218, 70))

    for i in range(6):
        x = 150 + i * 58
        y = 190 + (i % 2) * 16
        draw.rounded_rectangle((x, y, x + 32, y + 210), radius=10, fill=(10, 21, 30, 170))

    # Simple diagonal dashboard line work.
    for i in range(10):
        x1 = 650 + i * 38
        y1 = 200 + i * 8
        x2 = x1 + 80
        y2 = y1 + 32
        draw.line((x1, y1, x2, y2), fill=(98, 231, 208, 140), width=2)

    try:
        title_font = ImageFont.truetype(r'C:\Windows\Fonts\SegoeUIBold.ttf', 70)
        subtitle_font = ImageFont.truetype(r'C:\Windows\Fonts\SegoeUI.ttf', 30)
        body_font = ImageFont.truetype(r'C:\Windows\Fonts\SegoeUI.ttf', 34)
        label_font = ImageFont.truetype(r'C:\Windows\Fonts\SegoeUI.ttf', 24)
    except OSError:
        title_font = ImageFont.load_default()
        subtitle_font = ImageFont.load_default()
        body_font = ImageFont.load_default()
        label_font = ImageFont.load_default()

    draw.text((585, 185), 'Axonix Technologies', font=title_font, fill=(245, 247, 250))
    draw.text((585, 270), 'Digital transformation for public trust', font=subtitle_font, fill=(102, 233, 207))

    draw.rounded_rectangle((590, 340, 1110, 515), radius=22, fill=(15, 24, 33, 200))
    lines = [
        'Digital Government',
        'Enterprise Software',
        'Automation • Cloud • Data',
    ]
    line_y = 370
    for line in lines:
        draw.text((640, line_y), line, font=body_font, fill=(231, 239, 247))
        line_y += 48

    draw.rounded_rectangle((590, 540, 860, 595), radius=14, fill=(8, 149, 205, 160))
    draw.text((620, 555), 'AI HR Presenter Demo', font=label_font, fill=(248, 250, 252))

    img = img.convert('RGB')
    img.save(poster_path)


def create_video():
    poster_file = str(poster_path)
    cmd = [
        ffmpeg,
        '-y',
        '-loop', '1',
        '-framerate', '25',
        '-i', poster_file,
        '-vf', (
            "scale=1280:720:flags=lanczos,"
            "zoompan=z='if(lte(on,1),1,1.04)':d=1:s=1280x720,"
            "fade=t=in:st=0:d=1.2,"
            "fade=t=out:st=10.2:d=1.2,"
            "drawbox=x=600:y=150:w=520:h=200:color=#0ea5e9@0.12:t=fill,"
            "drawbox=x=610:y=355:w=540:h=130:color=#122433@0.75:t=fill,"
            "drawbox=x=620:y=525:w=500:h=45:color=#0ea5e9@0.18:t=fill,"
            "drawtext=fontfile='C\\:/Windows/Fonts/arialbd.ttf':text='AXONIX':fontcolor=#8ae9ff:fontsize=28:x=610:y=140,"
            "drawtext=fontfile='C\\:/Windows/Fonts/arialbd.ttf':text='Axonix Technologies':fontcolor=white:fontsize=52:x=610:y=175,"
            "drawtext=fontfile='C\\:/Windows/Fonts/arial.ttf':text='SOFTWARE SOLUTIONS FOR GOVERNMENT & ENTERPRISE':fontcolor=#7ee7d0:fontsize=22:x=610:y=270,"
            "drawtext=fontfile='C\\:/Windows/Fonts/arial.ttf':text='Digital Government Platforms':fontcolor=white:fontsize=27:x=610:y=350,"
            "drawtext=fontfile='C\\:/Windows/Fonts/arial.ttf':text='Enterprise Software Development':fontcolor=white:fontsize=27:x=610:y=392,"
            "drawtext=fontfile='C\\:/Windows/Fonts/arial.ttf':text='Automation • Cloud • Data • Support':fontcolor=white:fontsize=27:x=610:y=434,"
            "drawtext=fontfile='C\\:/Windows/Fonts/arial.ttf':text='Trusted by public & private organizations':fontcolor=#dfeeff:fontsize=21:x=610:y=530,"
            "format=yuv420p"
        ),
        '-t', '12',
        '-preset', 'veryfast',
        '-crf', '22',
        '-pix_fmt', 'yuv420p',
        '-movflags', '+faststart',
        str(mp4_path),
    ]
    subprocess.run(cmd, check=True)


create_poster()
create_video()
print(f'Created poster: {poster_path}')
print(f'Created promo video: {mp4_path}')
