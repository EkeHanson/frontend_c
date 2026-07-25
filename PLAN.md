# Comprehensive Plan: Restructure Index & Presentation

## Information Gathered
The project is a web development curriculum with ~50+ HTML pages spread across:
- **Root level**: Class slides (class-1 through class-6), practice files (day_2_wrap_up, day3, day5, app1, app2, main, action_page)
- **css/**: Week-organized CSS content (week2 day1-3, week3 day1+flexbox demos)
- **js/**: Week-organized JS content (week1 day1-4, week2 day1) with sub-projects (calculator, todo)

Current `index.htm` is a navigation hub that only lists SOME pages, missing many.

## Plan

### Step 1: Rewrite `index.htm` 
Create a comprehensive navigation page organized by **Weeks** with **Day 1, 2, 3** structure:



- **Week 1: Web Foundations** (root class files)
  - Day 1: `class-1-how-web-works.htm` - How the Web Works
  - Day 2: `class-2-how-web-works.htm` - Dev Environment Setup  
  - Day 3: `class-3-html-tags-img.htm` - Intro to HTML

- **Week 2: HTML Deep Dive** (root class 4-6 + extras)
  - Day 1: `class-4-html-elements.htm` - Text, Links & Images
  - Day 2: `class5.html` - HTML Forms
  - Day 3: `class6.html` - Semantic HTML5 & SEO

- **Week 3: CSS Styling** (css/week2)
  - Day 1: `css/week 2/day1/day1.html` - CSS Complete Course (Colors, BG, Borders, Box Model)
  - Day 2: `css/week 2/day2/outline.html` - CSS Outline
  - Day 3: `css/week 2/day3/index.html` - Z-Index & Positioning

- **Week 4: CSS Flexbox** (css/week3)
  - Day 1: `css/week 3/flex_intro.html` - Flexbox Intro
  - Day 2: `css/week 3/class_work.html` - Flexbox Demos (grow, shrink, order, self-align)
  - Day 3: `css/week 3/day3.html` - CSS Practice + `css/week 3/day1.html` - CSS Gradients

- **Week 5: JavaScript Foundations** (js/week1)
  - Day 1: `js/week1/day1.html` - JS Basics, Variables, Data Types
  - Day 2: `js/week1/day2.html` - Operators, Conditionals, Loops, Strings
  - Day 3: `js/week1/day3/index.md` - Functions & Control Flow

- **Week 6: JavaScript Projects** (js/week1+week2)
  - Day 1: `js/week1/day4/objects.html` - Objects & JSON
  - Day 2: `js/week1/day4/todo/todo.html` - Todo App
  - Day 3: `js/week2/day1.html` - DOM & Events

- **Bonus / Extra Pages** section covering:
  - `app1.html` - Quotations, Colors, CSS & Links
  - `day5.html` - HTML Forms + Character Entities
  - `class5work.html` - HTML Mastery Lab
  - `day_2_wrap_up.html`, `day3.htm`, `main.html`, `app.html`, `app2.html`
  - CSS extras: `css/style.css`, `css/google_chrome_broswer_home_page.html`
  - JS extras: Calculator project, Intro page

### Step 2: Add class navigation between pages
Update missing prev/next links in:
- `class-3-html-tags-img.htm` - Fix the "#" placeholder links to point to class-2 and class-4
- `class-4-html-elements.htm` - Fix the "#" placeholder for "Class 5" link to point to class5.html
- `class-1-how-web-works.htm` - Add "Go to Class 0/Prev" button if needed

### Step 3: Ensure all pages can be discovered from index
Every single .html file should be represented in the index navigation.

## Files to Edit
1. **index.htm** - Complete rewrite with week/day structure
2. **class-3-html-tags-img.htm** - Fix navigation links (Class 2 →, Class 4 →)
3. **class-4-html-elements.htm** - Fix "Class 5 →" link

## Follow-up
- Open `index.htm` in browser to verify all links work
- Ensure navigation flows: Day 1 → Day 2 → Day 3 per week

