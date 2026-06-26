/* ============================================================================
 * Flashcard source of truth — loaded by index.html as `window.CARDS`.
 *
 * HOW TO ADD A CARD (agents + human): append one object before the closing
 * `];` below. Keep `id` stable & unique (SRS review progress is keyed to it).
 *
 *   {
 *     id:       "kebab-unique-id",      // stable; never reuse or rename
 *     category: "Swift Members",        // pick from the taxonomy below
 *     front:    "the prompt / question",
 *     back:     "the answer (\\n for line breaks; keep it tight)",
 *     tags:     ["optional","labels"],
 *     source:   "where it came from, e.g. 'LC3 coding mock 2026-06-25'",
 *     created:  "YYYY-MM-DD"
 *   }
 *
 * CATEGORY TAXONOMY (keep consistent so filtering stays clean):
 *   "Swift Members"        — stdlib APIs/properties/methods/idioms
 *   "Algorithm Patterns"   — sliding window, two pointers, BFS/DFS, DP shapes…
 *   "Complexity & Reasoning" — cost-model facts, analysis traps, heuristics
 *   "Design Patterns"      — GoF + iOS architecture patterns
 *   "iOS / Platform"       — concurrency, persistence, lifecycle, security…
 *   "Tips & Heuristics"    — interview process tips, communication, gotchas
 * ========================================================================== */

window.CARDS = [
  {
    id: "swift-enumerated",
    category: "Swift Members",
    front: "Swift: how do you loop an array and get BOTH the position and the element together (instead of `for i in 0..<arr.count`)?",
    back: "for (i, element) in arr.enumerated() { … }\n\n`enumerated()` yields (offset, element) pairs. The offset is a 0-based position, not necessarily the collection's Index — for Array they coincide, but for slices use `zip(arr.indices, arr)` if you need the true index.",
    tags: ["swift", "stdlib", "iteration"],
    source: "LC3 coding dry-run 2026-06-25",
    created: "2026-06-25"
  },
  {
    id: "swift-set-membership-dedupe",
    category: "Swift Members",
    front: "Swift: fastest way to (a) test membership in ~O(1), (b) dedupe an array, and (c) detect a duplicate in a single step?",
    back: "let s = Set(arr)            // dedupe, O(n)\ns.contains(x)               // membership, O(1) avg\ns.insert(x).inserted        // false ⇒ x was already present\n\nDuplicates exist iff `Set(arr).count != arr.count`.",
    tags: ["swift", "stdlib", "set", "hashing"],
    source: "LC3 coding dry-run 2026-06-25",
    created: "2026-06-25"
  },
  {
    id: "pattern-sliding-window-trigger",
    category: "Algorithm Patterns",
    front: "Pattern trigger: 'longest / shortest CONTIGUOUS substring or subarray satisfying a constraint.' Which pattern — and what is the one mechanical insight?",
    back: "Sliding window. Insight: GROW the window by advancing the right edge; only SHRINK from the left when the constraint breaks. Every index enters and leaves at most once ⇒ O(n).\n\nAnti-pattern (today's miss): starting at max length and re-scanning every shorter substring ⇒ O(n²)–O(n³). Build the window UP in one pass; never start big and shrink.",
    tags: ["sliding-window", "two-pointers", "pattern"],
    source: "LC3 coding dry-run 2026-06-25",
    created: "2026-06-25"
  },
  {
    id: "complexity-cost-inside-loop",
    category: "Complexity & Reasoning",
    front: "Complexity trap: you loop over O(n) windows and build a `Set` from each window of length L. Why is this NOT O(n)?",
    back: "Building a Set from a length-L window is O(L), not O(1) — the per-iteration work multiplies in. ALWAYS account for the cost of operations inside the loop: Set/Array construction, slicing, copies, COW.\n\nToday: O(lengths) × O(windows) × O(Set build) ⇒ O(n³), not the O(n²) first stated.",
    tags: ["complexity", "analysis", "swift-cost-model"],
    source: "LC3 coding dry-run 2026-06-25",
    created: "2026-06-25"
  }
];
