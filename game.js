/* ============================================================
   WOJAK DIRECTOR ACADEMY — Game Engine
   Vanilla JS · No frameworks · localStorage persistence

   Flow: Landing → Level Map → Level (Intro → Lesson) → Back to Map
   All levels are always unlocked. Viewing a lesson marks it complete.
   ============================================================ */

// ------------------------------------
// LEVEL CONTENT DATABASE
// ------------------------------------
const LEVELS = {
  1: {
    name: "The Concept",
    icon: "💡",
    desc: "Every video starts with one sentence",
    intro: "Every Wojak video begins with a single sentence — a concept so clear you could pitch it to a stranger in 5 seconds. No concept, no direction. No direction, no video. This level teaches you the three questions that separate a real concept from a vague idea.",
    lessons: [
      {
        title: "The 3 Concept Questions",
        body: "Before you write a single scene, answer these three questions:",
        list: [
          "What is your video about? — One sentence. No rambling.",
          "What emotion should the viewer feel at the end? — Motivated? Reflective? Angry? Pick one.",
          "How many scenes? — Gives you a production scope before you start."
        ]
      },
      {
        title: "Why This Matters",
        body: "A strong concept is a filter. Every scene you write later gets tested against it — does this scene serve the concept? If not, cut it."
      },
      {
        highlight: "Strong concept = clear sentence + target emotion + scene count."
      }
    ]
  },

  2: {
    name: "The Breakdown",
    icon: "🎬",
    desc: "One action per scene — the golden rule",
    intro: "A scene is one action, one camera angle, one expression. Stack multiple actions into a single scene and everything falls apart — the AI can't render it, and the viewer can't follow it. This level teaches you the golden rule of Wojak scene construction.",
    lessons: [
      {
        title: "The One-Action Rule",
        body: "Every scene should contain exactly one action. If your character is doing two things, you need two scenes. This keeps the AI focused and the visuals clean."
      },
      {
        title: "Camera Angle Library",
        body: "Pick one per scene:",
        list: [
          "3Q (Three-Quarter) — the default; shows face and body at an angle",
          "OTS (Over-the-Shoulder) — looking at something from behind the character",
          "WIDE — establishes environment, character is smaller in frame",
          "LOW — camera looks up at the character; adds power or dominance",
          "TOP (Bird's Eye) — camera looks straight down; adds vulnerability or overview"
        ]
      },
      {
        title: "Expression Library",
        body: "Wojak expressions drive emotion. Match the expression to the scene's purpose — determined, contemplative, exhausted, triumphant, neutral focus."
      },
      {
        highlight: "One scene = one action + one camera angle + one expression."
      }
    ]
  },

  3: {
    name: "The Lock",
    icon: "🔒",
    desc: "Consistency is what makes it look real",
    intro: "The Consistency Lock is what separates amateur Wojak videos from cinematic ones. If your character's wardrobe changes randomly, if the time of day jumps without logic, if recurring objects vanish — the viewer's brain flags it as fake. This level teaches you to lock your visual identity.",
    lessons: [
      {
        title: "The Three Locks",
        body: "Before you write scenes, lock these three elements:",
        list: [
          "Wardrobe Lock — Pick one outfit. Your character wears it in every scene unless there's a story reason to change.",
          "Motif Lock — Recurring visual elements (a specific mug, a notebook, a gym bag) that anchor the world.",
          "Time Pattern Lock — Your scenes should follow a logical time flow (morning → afternoon → evening), not random jumps."
        ]
      },
      {
        title: "Why It Matters",
        body: "AI generation is stateless — it doesn't remember previous scenes. The Consistency Lock is YOUR job. You enforce it through prompt discipline, and the result is a video that feels cohesive instead of disjointed."
      },
      {
        highlight: "Lock the wardrobe. Lock the motifs. Lock the time. Then write."
      }
    ]
  },

  4: {
    name: "The Prompt",
    icon: "📝",
    desc: "70% is locked — you only fill 5 blanks",
    intro: "The Wojak prompt looks complex, but here's the secret: 70% of it never changes. The Wojak face description, the style block, the Quiet Window color grade — all locked. Your job is to fill in 5 blanks: environment, wardrobe, action, camera angle, and expression. This level shows you exactly how.",
    lessons: [
      {
        title: "Prompt Anatomy",
        body: "Every Wojak image prompt has these sections:",
        list: [
          "LOCKED — Wojak face description (pale, simplified, dot-eyes, thin-line mouth)",
          "LOCKED — Art style block (2D illustration, clean linework, muted palette)",
          "LOCKED — Quiet Window color grade (soft, desaturated, cinematic tones)",
          "YOU FILL — Environment (where is the character?)",
          "YOU FILL — Wardrobe (what are they wearing?)",
          "YOU FILL — Action (what one thing are they doing?)",
          "YOU FILL — Camera angle (3Q, OTS, WIDE, LOW, TOP)",
          "YOU FILL — Expression (what emotion shows on the face?)"
        ]
      },
      {
        title: "Why 70% Is Locked",
        body: "The locked sections are what make it a Wojak video. Change the face description and it's not Wojak anymore. Change the color grade and the cinematic feel disappears. The locks protect the visual identity while giving you creative freedom in the 5 blanks."
      },
      {
        highlight: "5 blanks. That's your creative space. Everything else is engineered."
      }
    ]
  },

  5: {
    name: "The Clip",
    icon: "🎥",
    desc: "From still images to moving scenes",
    intro: "You've built the stills. Now they need to move. Video prompts control how the camera behaves, what motion happens in the scene, and how the clip feels. This level covers the bridge from image to video — shot types, camera motion, and the JSON structure that holds it all together.",
    lessons: [
      {
        title: "Video Prompt Structure",
        body: "Each video clip is defined by a JSON block containing:",
        list: [
          "Shot type — what the camera frames (close-up, medium, wide, establishing)",
          "Camera motion — how the camera moves (static, pan, push-in, pull-out, tilt)",
          "Scene action — what happens during the 3-5 second clip",
          "Color palette — consistent with Quiet Window grade",
          "Audio cue — what sound or music beat hits during this clip"
        ]
      },
      {
        title: "Camera Motion Rules",
        body: "Camera motion conveys emotion. Don't pick randomly:",
        list: [
          "Static (locked-off) — calm, stillness, contemplation, routine",
          "Slow pan — revealing an environment, showing scale or context",
          "Push-in (slow zoom) — building tension, focusing attention, dramatic weight",
          "Pull-out — isolation, loss, stepping back to reflect",
          "Tilt up/down — power dynamics, transformation, revelation"
        ]
      },
      {
        highlight: "Motion = emotion. Static = calm. Push-in = tension. Pan = reveal."
      }
    ]
  },

  6: {
    name: "The Choice",
    icon: "🛤️",
    desc: "Manual or Auto — pick your workflow",
    intro: "You now know the full Wojak pipeline: concept, breakdown, consistency lock, prompts, clips. The final question is how you execute it. Two routes: Manual (you fill every template yourself) or Auto (Wojak Director GPT guides you through a conversation and generates everything). This level helps you pick.",
    lessons: [
      {
        title: "Manual Route",
        body: "You fill every template yourself — concept doc, scene breakdown, consistency lock sheet, image prompts, video prompts. Maximum control, deeper learning, takes more time.",
        list: [
          "Best for: learning the craft, custom projects, specific creative visions",
          "You decide every detail — nothing is automated",
          "Recommended for: your first 1-2 videos (to truly understand the system)"
        ]
      },
      {
        title: "Auto Route — Wojak Director GPT",
        body: "A guided conversation that walks you through each step and generates all the prompts for you. Same system, same quality — just faster.",
        list: [
          "Best for: speed, production runs, when you know the system and want efficiency",
          "You answer questions, the GPT generates the prompts",
          "Same Wojak quality — the templates are built into the GPT"
        ]
      },
      {
        highlight: "Learn manual first. Then use auto for speed. Both produce the same quality."
      }
    ]
  }
};


// ------------------------------------
// PROGRESS MANAGEMENT
// ------------------------------------
const STORAGE_KEY = "wojak-academy-progress";

function loadProgress() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (data && Array.isArray(data.completedLevels)) return data;
  } catch (e) { /* corrupted data — reset */ }
  return { completedLevels: [] };
}

function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

/** Mark a level as completed (student viewed the lesson content) */
function completeLevel(levelNum) {
  const progress = loadProgress();
  if (!progress.completedLevels.includes(levelNum)) {
    progress.completedLevels.push(levelNum);
    progress.completedLevels.sort((a, b) => a - b);
  }
  saveProgress(progress);
}

/** Check if a level has been visited/completed */
function isLevelCompleted(levelNum) {
  return loadProgress().completedLevels.includes(levelNum);
}


// ------------------------------------
// SCREEN & PHASE NAVIGATION
// ------------------------------------

/** Hide all screens, activate the one matching `id` */
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  const target = document.getElementById(id);
  if (target) target.classList.add("active");
}

/** Within #level-screen, show a specific phase (intro | lesson) */
function showPhase(phase) {
  document.querySelectorAll("#level-screen .phase").forEach(p => p.classList.remove("active"));
  const target = document.querySelector(`#level-screen .phase-${phase}`);
  if (target) target.classList.add("active");
}

/** Navigate back to the level map */
function goToMap() {
  renderMap();
  showScreen("level-map");
}


// ------------------------------------
// LEVEL MAP RENDERING
// Two states per card: completed (with checkmark) or unvisited.
// All levels are always clickable — no locking.
// ------------------------------------
function renderMap() {
  const progress = loadProgress();
  const grid = document.querySelector(".level-grid");
  if (!grid) return;

  grid.innerHTML = "";

  for (let i = 1; i <= 6; i++) {
    const level = LEVELS[i];
    const completed = progress.completedLevels.includes(i);

    const card = document.createElement("div");
    card.className = "level-card";
    if (completed) card.classList.add("completed");

    card.innerHTML = `
      <div class="level-num">Level ${i}</div>
      <div class="level-name">${level.icon} ${level.name}</div>
      <div class="level-desc">${level.desc}</div>
    `;

    // All levels are always clickable
    card.addEventListener("click", () => startLevel(i));

    grid.appendChild(card);
  }

  // Update progress bar
  const fill = document.querySelector(".map-progress-fill");
  if (fill) {
    fill.style.width = (progress.completedLevels.length / 6) * 100 + "%";
  }
}


// ------------------------------------
// LEVEL SCREEN — CONTENT LOADING
// Two phases per level: intro → lesson
// ------------------------------------
let activeLevelNum = null;

function startLevel(n) {
  activeLevelNum = n;
  const level = LEVELS[n];
  if (!level) return;

  showScreen("level-screen");

  // Update header badge
  const badge = document.querySelector(".level-badge");
  if (badge) badge.textContent = `Level ${n} — ${level.name}`;

  // -- INTRO PHASE --
  const introPhase = document.querySelector(".phase-intro");
  if (introPhase) {
    introPhase.innerHTML = `
      <div class="intro-icon">${level.icon}</div>
      <h2>${level.name}</h2>
      <p>${level.intro}</p>
      <button class="btn btn-primary" data-action="go-lesson">Start Lesson →</button>
    `;
  }

  // -- LESSON PHASE --
  const lessonPhase = document.querySelector(".phase-lesson");
  if (lessonPhase) {
    let lessonHTML = "";
    level.lessons.forEach(card => {
      if (card.highlight) {
        lessonHTML += `<div class="lesson-card lesson-highlight">${card.highlight}</div>`;
      } else {
        let listHTML = "";
        if (card.list) {
          listHTML = "<ul>" + card.list.map(item => `<li>${item}</li>`).join("") + "</ul>";
        }
        lessonHTML += `
          <div class="lesson-card">
            <h3>${card.title}</h3>
            <p>${card.body}</p>
            ${listHTML}
          </div>
        `;
      }
    });
    lessonHTML += `<button class="btn btn-secondary" style="margin-top:1.5rem" data-action="go-map">← Back to Lessons</button>`;
    lessonPhase.innerHTML = lessonHTML;
  }

  showPhase("intro");
}


// ------------------------------------
// FINAL SCREEN RENDERING
// ------------------------------------
function renderFinalScreen() {
  const screen = document.getElementById("final-screen");
  if (!screen) return;

  screen.innerHTML = `
    <div class="wojak-hero">🎓</div>
    <h1 class="landing-title">Academy <span>Complete</span></h1>
    <p class="landing-sub">You've mastered the Wojak Director workflow — from concept to clip. Now choose your route and start creating.</p>
    <div class="route-cards">
      <div class="route-card">
        <div class="route-icon">📝</div>
        <h3>Manual Route</h3>
        <p>Fill every template yourself. Maximum control, deeper craft understanding. Best for your first 1-2 videos.</p>
        <button class="btn btn-secondary" data-action="go-map">Review Levels</button>
      </div>
      <div class="route-card">
        <div class="route-icon">🤖</div>
        <h3>Auto Route</h3>
        <p>Wojak Director GPT guides you through a conversation and generates all prompts for you. Same quality, faster.</p>
        <a href="https://chatgpt.com/g/g-69d59f1df66c8191b3eb4af278b6df24-wojak-director" target="_blank" rel="noopener" class="btn btn-gold">Launch Wojak Director →</a>
      </div>
    </div>
  `;
}


// ------------------------------------
// META-PROMPTS (Manual Route templates)
// ------------------------------------
const IMAGE_META_PROMPT = `You are a Wojak Video Prompt Generator. You help users create cinematic Wojak-style AI video scenes by generating image prompts they can paste into any AI image generator.

WORKFLOW — follow this order:
1. Ask: "What is your Wojak video about? Describe it in one sentence."
2. Ask: "What emotion should the viewer feel at the end?"
3. Ask: "How many scenes do you want? (I recommend 6-10 for a 60-90 second video)"
4. Ask: "Describe the character's wardrobe — this stays the same in every scene." (e.g. "dark crewneck sweater, tailored dark pants, white sneakers, smartwatch")
5. Then go scene by scene. For each scene ask:
   - What's happening? (ONE action only — if they give multiple, tell them to split)
   - Where is this scene? (environment + mood)
   - What key props are in the scene? (2-3 items)
   - What is the character feeling? (you'll map this to an expression)

CAMERA ANGLES — pick the best one for each scene's emotion:
- Cinematic three-quarter eye-level shot (default, most versatile)
- Over-the-shoulder shot from behind the character (screens, intimate)
- Wide shot framed through a doorway, full body visible (environment, isolation)
- Low angle shot looking up at the character (power, confidence)
- Top-down overhead shot looking directly down (routine, sleeping, stillness)

EXPRESSIONS — map character emotion to one of these:
- determined (grinding, working hard, studying, exercising)
- smug (winning, achieving, feeling superior)
- sad (losing, stuck, giving up)
- pensive (reflecting, deciding, quiet moments)
- angry (struggling, fighting obstacles)
- peaceful (resting, morning calm, satisfaction)

GREEN SCREEN RULE: If the scene has a phone, laptop, or monitor, add to the props: "smartphone/laptop with perfectly flat bright chroma key green screen, no reflections, no UI details"

For EACH scene, output this EXACT prompt with the blanks filled in. Do NOT modify the locked sections:

---
A cinematic 3D render of a Wojak character — smooth white bald egg-shaped head with flat 2D black line-art meme facial features drawn on the surface: simple black dot eyes, thin single-line eyebrows, small curved line mouth, minimal or no nose. The face is [EXPRESSION], in classic internet Wojak meme style. The facial features are NOT realistic — they are simplified line-art drawn onto a smooth white 3D head, like the Wojak meme. The character's body and hands are smooth white stylized skin.

The character is in a [ENVIRONMENT], [KEY PROPS]. The character is [POSE/ACTION], wearing [WARDROBE].

The environment and clothing are rendered in hyperrealistic 3D with photorealistic detail, materials, and textures — ultra-detailed fabric weave, realistic metal, real wood grain, photographic lighting on objects. The character's smooth white skin and flat line-art face contrast against this hyperreal world. Clean toon-PBR shading on the character, full hyperrealistic PBR on everything else. Crisp readable edges, subtle rim light accents, cinematic game-trailer production quality. Clear material separation (fabric vs metal vs plastic vs wood).

The scene is lit with Quiet Window – shadows cool slate, midtones muted teal, highlights soft porcelain, saturation restrained, contrast gentle, atmosphere introspective stillness, lighting overcast window light, texture fine grain matte, tone curve soft filmic rolloff. Background slightly blurred to emphasize the subject.

[CAMERA ANGLE].
Cinematic depth of field, subject sharp, background bokeh.
No text, no watermarks, no extra characters.
---

RULES:
- Work scene by scene. Present ONE prompt at a time.
- NEVER modify the Wojak face description, style block, or Quiet Window grade — they are locked.
- You ONLY fill in: expression, environment, props, action, wardrobe, camera angle.
- Use the SAME wardrobe in every scene.
- One action per scene — if user gives multiple, tell them to split into separate scenes.
- After each prompt say: "Copy this prompt and paste it into your AI image generator. Ready for the next scene?"`;

const VIDEO_META_PROMPT = `You are a Wojak Video Prompt Generator. The user has already created Wojak scene images. Now you help them create video prompts for Kling 3.0 or Seedance 2.0.

WORKFLOW:
1. Ask: "How many scenes do you have?"
2. Ask: "What is the character wearing?" (for the wardrobe field)
3. Then go scene by scene. For each scene ask:
   - What's happening? (one action)
   - Where is it? (location)
   - Time of day?
   - What's the mood? (calm/intense/melancholic/triumphant/reflective)

SHOT TYPES — pick based on the scene:
- "medium shot, three-quarter angle, eye level" (default)
- "over-the-shoulder shot, shallow depth of field" (screen scenes)
- "wide shot, full environment visible, subject centered" (establishing)
- "low angle shot, looking up at subject" (power)
- "top-down overhead shot, looking directly down" (routines)
- "close-up shot, face and upper body, shallow DOF" (emotional)

CAMERA MOTION — pick based on mood (DEFAULT TO STATIC):
- "none, fully static locked-off camera" (calm, stillness — DEFAULT)
- "very slow pan right, subtle and smooth" (revealing environment)
- "very slow push-in zoom, almost imperceptible" (building tension)
- "very slow pull-out zoom, revealing surroundings" (isolation)

COLOR PALETTES:
- Morning calm: "soft whites, pale blues, morning neutrals, warm golden accents"
- Productive: "warm ambers, clean whites, subtle greens, natural wood tones"
- Night: "deep blues, cool grays, warm lamp pools, muted purples"
- Harsh: "cold fluorescents, sickly yellows, washed-out whites, gray undertones"
- Triumph: "rich golds, warm oranges, deep satisfied browns, sunset tones"

For EACH scene, output this JSON filled in:

{
  "shot": {
    "composition": "[SHOT TYPE]",
    "camera_motion": "[MOTION]",
    "frame_rate": "24fps",
    "film_grain": "very subtle natural grain"
  },
  "subject": {
    "description": "Wojak-style humanoid, [CHARACTER STATE]",
    "wardrobe": "[WARDROBE]"
  },
  "scene": {
    "location": "[LOCATION]",
    "time_of_day": "[TIME]",
    "environment": "[2-3 WORD MOOD]"
  },
  "visual_details": {
    "action": "[ONE ACTION]",
    "props": "[KEY PROPS]"
  },
  "cinematography": {
    "lighting": "natural light with soft shadows",
    "tone": "[TONE]"
  },
  "audio": {
    "ambient": "[AMBIENT SOUND]",
    "avoid": "no harsh sounds, no sudden audio spikes"
  },
  "color_palette": "[PALETTE]",
  "dialogue": { "disable_text": true }
}

RULES:
- Work scene by scene. ONE video prompt at a time.
- Default to STATIC camera unless the emotion specifically calls for movement.
- ALWAYS set disable_text to true.
- After each prompt say: "Copy this JSON and paste it into Kling 3.0 or Seedance 2.0, then upload your scene image. Ready for the next?"`;

// ------------------------------------
// COPY TO CLIPBOARD
// ------------------------------------
function copyPrompt(type) {
  const text = type === 'image' ? IMAGE_META_PROMPT : VIDEO_META_PROMPT;
  navigator.clipboard.writeText(text).then(() => {
    const btns = document.querySelectorAll('.btn-copy');
    btns.forEach(btn => {
      if (btn.onclick && btn.onclick.toString().includes(type)) {
        const original = btn.textContent;
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(() => { btn.textContent = original; btn.classList.remove('copied'); }, 2000);
      }
    });
  });
}

// ------------------------------------
// POPULATE PROMPT DISPLAYS
// ------------------------------------
function populatePrompts() {
  const imgEl = document.getElementById('image-prompt');
  const vidEl = document.getElementById('video-prompt');
  if (imgEl) imgEl.textContent = IMAGE_META_PROMPT;
  if (vidEl) vidEl.textContent = VIDEO_META_PROMPT;
}

// ------------------------------------
// BRIDGE FUNCTIONS
// ------------------------------------
function startGame() {
  renderMap();
  showScreen("level-map");
}

// ------------------------------------
// GLOBAL EVENT DELEGATION
// ------------------------------------
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-action]");
  if (!btn) return;

  const action = btn.dataset.action;

  switch (action) {
    case "begin":
      renderMap();
      showScreen("level-map");
      break;

    case "go-map":
      goToMap();
      break;

    case "go-lesson":
      // Mark level complete when user enters the lesson
      if (activeLevelNum) {
        completeLevel(activeLevelNum);
      }
      showPhase("lesson");
      break;

    case "go-final":
      renderFinalScreen();
      showScreen("final-screen");
      break;
  }
});


// ------------------------------------
// INIT — ON PAGE LOAD
// ------------------------------------
function init() {
  // Ensure progress exists in localStorage
  const progress = loadProgress();
  saveProgress(progress);

  // Render screens
  renderFinalScreen();
  populatePrompts();

  // Start on the landing screen
  showScreen("landing");
}

// Boot when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
