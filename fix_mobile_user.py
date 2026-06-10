import os, re

files = [f for f in os.listdir('.') if f.endswith('.html')]
changed = []

for fname in files:
    with open(fname, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Pastdagi mobileUserBlock div ni o'chirish
    new_content = re.sub(r'\s*<div id="mobileUserBlock"></div>', '', content)

    # 2. Mobile menu tepasiga qo'shish
    new_content = re.sub(
        r'(<div class="mobile-menu" id="mobileMenu">)',
        r'\1\n    <div id="mobileUserBlock"></div>',
        new_content
    )

    if new_content != content:
        with open(fname, 'w', encoding='utf-8') as f:
            f.write(new_content)
        changed.append(fname)

print('Ozgartirildi:', changed)
