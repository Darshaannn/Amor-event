path = r'c:/Darshan/Amor events/amor-eventz-website/styles.css'

# Read binary, strip all null bytes from UTF-16 corruption
with open(path, 'rb') as f:
    raw = f.read()

clean = raw.replace(b'\x00', b'')
text = clean.decode('utf-8', errors='ignore')

# Remove old static hero background
text = text.replace(
    "background: url('assets/hero_background.png') no-repeat center center / cover;",
    "/* static bg removed - using hero slider */"
)

# Fix transition variable and add --clr-burgundy-dark
text = text.replace(
    "--transition-smooth: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);",
    "--clr-burgundy-dark: #1e0410;\n    --transition-smooth: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);"
)

extra = """
/* ===== HERO SLIDER FINAL ===== */
.hero {
    background: none !important;
    background-color: #0a0005 !important;
}
.hero-slider {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    overflow: hidden;
}
.hero-slide {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    opacity: 0;
    transform: scale(1.0);
    transition: opacity 2.5s ease-in-out, transform 10s ease-out;
}
.hero-slide.active {
    opacity: 1;
    transform: scale(1.08);
    z-index: 1;
}
.hero-slide.previous {
    opacity: 1;
    transform: scale(1.08);
    z-index: 0;
}
.hero-overlay {
    z-index: 2 !important;
    position: absolute;
}
.hero-content {
    position: relative;
    z-index: 3 !important;
}

/* ===== LUXURY SCROLLBAR ===== */
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: #1e0410; }
::-webkit-scrollbar-thumb { background: rgba(212,175,106,0.4); border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: rgba(212,175,106,0.8); }
::selection { background: #D4AF6A; color: #1e0410; }

/* ===== REVEAL ANIMATION REFINEMENT ===== */
.reveal {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal.active {
    opacity: 1;
    transform: translateY(0);
}
.delay-1 { transition-delay: 0.2s !important; }
.delay-2 { transition-delay: 0.4s !important; }
.delay-3 { transition-delay: 0.6s !important; }
"""

with open(path, 'w', encoding='utf-8') as f:
    f.write(text + extra)

print("SUCCESS: CSS cleaned and hero slider styles injected.")
