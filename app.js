// ULPPL Workout Split App JavaScript - Enhanced with YouTube Links

// Updated workout data with YouTube links
const workoutData = {
    workoutSplit: {
        name: "ULPPL Workout Split - Enhanced",
        subtitle: "7-Day Program with Exercise Demonstrations",
        level: "Intermediate (2-3 years)",
        duration: "45-60 minutes/day",
        frequency: "5 training days + 2 rest days",
        focus: "Bodybuilding, Build Muscle, Gain Strength",
        workouts: [
            {
                day: "Day 1",
                name: "Upper Body",
                focus: "Mixed Upper Body",
                type: "workout",
                exercises: [
                    {
                        name: "Dumbbell Bench Press",
                        sets: "4 sets",
                        reps: "12/8/7/5",
                        notes: "Low weight warmup → working weight → same → heavy",
                        youtube: "https://www.youtube.com/watch?v=X3YrlBmjWrY",
                    },
                    {
                        name: "Seated Dumbbell Row",
                        sets: "4 sets",
                        reps: "12/8/7/5",
                        notes: "Low weight warmup → working weight → same → heavy",
                        youtube: "https://www.youtube.com/watch?v=gfUg6qWohTk",
                    },
                    {
                        name: "Arnold Press",
                        sets: "4 sets",
                        reps: "12/8/7/5",
                        notes: "Low weight warmup → working weight → same → heavy",
                        youtube: "https://www.youtube.com/watch?v=6Z15_WdXmVw",
                    },
                    {
                        name: "Chin-up",
                        sets: "4 sets",
                        reps: "12/8/7/5",
                        notes: "Assisted → bodyweight → weighted → max",
                        youtube: "https://www.youtube.com/watch?v=mRy9m2Q9_1I",
                    },
                    {
                        name: "EZ-Bar Preacher Curl",
                        sets: "4 sets",
                        reps: "12/8/7/5",
                        notes: "Low weight warmup → working weight → same → heavy",
                        youtube: "https://www.youtube.com/watch?v=As2vHQ09NB0",
                    },
                    {
                        name: "Seated Tricep Dumbbell Press",
                        sets: "4 sets",
                        reps: "12/8/7/5",
                        notes: "Low weight warmup → working weight → same → heavy",
                        youtube: "https://www.youtube.com/watch?v=F3w6m0aENVQ",
                    },
                ],
            },
            {
                day: "Day 2",
                name: "Lower Body",
                focus: "Mixed Lower Body",
                type: "workout",
                exercises: [
                    {
                        name: "Dumbbell Front Squat",
                        sets: "4 sets",
                        reps: "12/8/7/5",
                        notes: "Low weight warmup → working weight → same → heavy",
                        youtube: "https://www.youtube.com/watch?v=v-mQm_droHg",
                    },
                    {
                        name: "Barbell Glute Bridge",
                        sets: "4 sets",
                        reps: "12/8/7/5",
                        notes: "Low weight warmup → working weight → same → heavy",
                        youtube: "https://www.youtube.com/watch?v=wPM8icPu6H8",
                    },
                    {
                        name: "Barbell Lunge",
                        sets: "4 sets",
                        reps: "12/8/7/5",
                        notes: "Low weight warmup → working weight → same → heavy",
                        youtube: "https://www.youtube.com/watch?v=vKbcSITFvH0",
                    },
                    {
                        name: "Leg Extensions",
                        sets: "4 sets",
                        reps: "12/8/7/5",
                        notes: "Low weight warmup → working weight → same → heavy",
                        youtube: "https://www.youtube.com/watch?v=4ZDm5EbiFI8",
                    },
                    {
                        name: "Lying Leg Curls",
                        sets: "4 sets",
                        reps: "12/8/7/5",
                        notes: "Low weight warmup → working weight → same → heavy",
                        youtube: "https://www.youtube.com/watch?v=ZHlBSI6JPsA",
                    },
                    {
                        name: "Standing Calf Raises",
                        sets: "4 sets",
                        reps: "12/8/7/5",
                        notes: "Low weight warmup → working weight → same → heavy",
                        youtube: "https://www.youtube.com/watch?v=gwLzBJYoWlI",
                    },
                ],
            },
            {
                day: "Day 3",
                name: "Rest Day",
                focus: "Recovery & Nutrition",
                type: "rest",
                message:
                    "Focus on recovery, hydration, and proper nutrition. Light stretching or walking is beneficial.",
                tips: [
                    "💧 Stay hydrated - aim for 8-10 glasses of water",
                    "🍗 Eat adequate protein for muscle recovery",
                    "😴 Get 7-9 hours of quality sleep",
                    "🧘 Consider light stretching or yoga",
                    "🚶 Light walking or mobility work is beneficial",
                ],
            },
            {
                day: "Day 4",
                name: "Push",
                focus: "Chest, Shoulders, Triceps",
                type: "workout",
                exercises: [
                    {
                        name: "Barbell Bench Press",
                        sets: "4 sets",
                        reps: "12/8/7/5",
                        notes: "Low weight warmup → working weight → same → heavy",
                        youtube: "https://www.youtube.com/watch?v=rT7DgCr-3pg",
                    },
                    {
                        name: "Standing Military Press",
                        sets: "4 sets",
                        reps: "12/8/7/5",
                        notes: "Low weight warmup → working weight → same → heavy",
                        youtube: "https://www.youtube.com/watch?v=43GSKivZnw4",
                    },
                    {
                        name: "Barbell Incline Bench Press",
                        sets: "4 sets",
                        reps: "12/8/7/5",
                        notes: "Low weight warmup → working weight → same → heavy",
                        youtube: "https://www.youtube.com/watch?v=SrqOu55lrYU",
                    },
                    {
                        name: "Seated Dumbbell Shoulder Press",
                        sets: "4 sets",
                        reps: "12/8/7/5",
                        notes: "Low weight warmup → working weight → same → heavy",
                        youtube: "https://www.youtube.com/watch?v=0rChzYPyuYI",
                    },
                    {
                        name: "Rope Cable Triceps Extension",
                        sets: "4 sets",
                        reps: "12/8/7/5",
                        notes: "Low weight warmup → working weight → same → heavy",
                        youtube: "https://www.youtube.com/watch?v=JDEDaZTEzGE",
                    },
                    {
                        name: "Cable Standing Fly",
                        sets: "4 sets",
                        reps: "12/8/7/5",
                        notes: "Low weight warmup → working weight → same → heavy",
                        youtube: "https://www.youtube.com/watch?v=wPM8icPu6H8",
                    },
                ],
            },
            {
                day: "Day 5",
                name: "Legs",
                focus: "Quadriceps, Hamstrings, Glutes, Calves",
                type: "workout",
                exercises: [
                    {
                        name: "Barbell Back Squat",
                        sets: "4 sets",
                        reps: "12/8/7/5",
                        notes: "Low weight warmup → working weight → same → heavy",
                        youtube: "https://www.youtube.com/watch?v=rrJIyZGlK8c",
                    },
                    {
                        name: "Dumbbell Bulgarian Split Squat",
                        sets: "4 sets",
                        reps: "12/8/7/5",
                        notes: "Low weight warmup → working weight → same → heavy",
                        youtube: "https://www.youtube.com/watch?v=vKbcSITFvH0",
                    },
                    {
                        name: "Romanian Deadlift",
                        sets: "4 sets",
                        reps: "12/8/7/5",
                        notes: "Low weight warmup → working weight → same → heavy",
                        youtube: "https://www.youtube.com/watch?v=7j-2w4-P14I",
                    },
                    {
                        name: "Leg Extensions",
                        sets: "4 sets",
                        reps: "12/8/7/5",
                        notes: "Low weight warmup → working weight → same → heavy",
                        youtube: "https://www.youtube.com/watch?v=4ZDm5EbiFI8",
                    },
                    {
                        name: "Lever Seated Leg Curl",
                        sets: "4 sets",
                        reps: "12/8/7/5",
                        notes: "Low weight warmup → working weight → same → heavy",
                        youtube: "https://www.youtube.com/watch?v=-W1yIIE9dlU",
                    },
                    {
                        name: "Seated Calf Raise Machine",
                        sets: "4 sets",
                        reps: "12/8/7/5",
                        notes: "Low weight warmup → working weight → same → heavy",
                        youtube: "https://www.youtube.com/watch?v=k67UjgvJdEk",
                    },
                ],
            },
            {
                day: "Day 6",
                name: "Pull",
                focus: "Back, Biceps",
                type: "workout",
                exercises: [
                    {
                        name: "Pull-up",
                        sets: "4 sets",
                        reps: "12/8/7/5",
                        notes: "Assisted → bodyweight → weighted → max",
                        youtube: "https://www.youtube.com/watch?v=MhokcbRLP5w",
                    },
                    {
                        name: "Barbell Pendlay Row",
                        sets: "4 sets",
                        reps: "12/8/7/5",
                        notes: "Low weight warmup → working weight → same → heavy",
                        youtube: "https://www.youtube.com/watch?v=gfUg6qWohTk",
                    },
                    {
                        name: "Dumbbell Deadlift",
                        sets: "4 sets",
                        reps: "12/8/7/5",
                        notes: "Low weight warmup → working weight → same → heavy",
                        youtube: "https://www.youtube.com/watch?v=7j-2w4-P14I",
                    },
                    {
                        name: "Single Arm Dumbbell Row",
                        sets: "4 sets",
                        reps: "12/8/7/5",
                        notes: "Low weight warmup → working weight → same → heavy",
                        youtube: "https://www.youtube.com/watch?v=gfUg6qWohTk",
                    },
                    {
                        name: "Alternate Hammer Curl",
                        sets: "4 sets",
                        reps: "12/8/7/5",
                        notes: "Low weight warmup → working weight → same → heavy",
                        youtube: "https://www.youtube.com/watch?v=zC3nLlEvin4",
                    },
                    {
                        name: "Lat Pulldown",
                        sets: "4 sets",
                        reps: "12/8/7/5",
                        notes: "Low weight warmup → working weight → same → heavy",
                        youtube: "https://www.youtube.com/watch?v=SALxEARiMkw",
                    },
                ],
            },
            {
                day: "Day 7",
                name: "Rest Day",
                focus: "Recovery & Preparation",
                type: "rest",
                message:
                    "Take a complete rest day to prepare for the upcoming week. Active recovery is recommended.",
                tips: [
                    "🔄 Prepare for next week's training cycle",
                    "📝 Review your progress and goals",
                    "🍽️ Meal prep for the upcoming week",
                    "🧘 Focus on stress management and relaxation",
                    "🛀 Consider sauna, massage, or other recovery methods",
                ],
            },
        ],
    },
};

// App state
let currentWorkoutIndex = 0;

// DOM elements
const workoutContent = document.getElementById("workout-content");
const navTabs = document.querySelectorAll(".nav-tab");

// Initialize app
document.addEventListener("DOMContentLoaded", function () {
    initializeApp();
    setupEventListeners();
});

// Initialize the application
function initializeApp() {
    renderWorkoutContent();
    updateActiveTab();
}

// Setup event listeners
function setupEventListeners() {
    navTabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            switchToWorkout(index);
        });
    });

    // Add keyboard navigation
    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft" && currentWorkoutIndex > 0) {
            switchToWorkout(currentWorkoutIndex - 1);
        } else if (
            e.key === "ArrowRight" &&
            currentWorkoutIndex < workoutData.workoutSplit.workouts.length - 1
        ) {
            switchToWorkout(currentWorkoutIndex + 1);
        }
    });
}

// Switch to a specific workout
function switchToWorkout(index) {
    if (index >= 0 && index < workoutData.workoutSplit.workouts.length) {
        currentWorkoutIndex = index;
        renderWorkoutContent();
        updateActiveTab();

        // Smooth scroll to workout content on mobile
        if (window.innerWidth <= 768) {
            document.querySelector(".main-content").scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }
}

// Update active tab styling
function updateActiveTab() {
    navTabs.forEach((tab, index) => {
        if (index === currentWorkoutIndex) {
            tab.classList.add("active");
        } else {
            tab.classList.remove("active");
        }
    });
}

// Open YouTube video in new tab
function openYouTubeVideo(url) {
    window.open(url, "_blank");
}

// Render workout content
function renderWorkoutContent() {
    const workout = workoutData.workoutSplit.workouts[currentWorkoutIndex];

    if (workout.type === "rest") {
        // Render rest day content
        const restHTML = `
      <div class="workout-day active">
        <div class="rest-day-content">
          <div class="rest-header">
            <h2 class="workout-title">${workout.day}: ${workout.name}</h2>
            <p class="workout-focus">${workout.focus}</p>
          </div>
          
          <div class="rest-message">
            <div class="rest-icon">🛌</div>
            <p class="rest-description">${workout.message}</p>
          </div>
          
          <div class="rest-tips">
            <h3>Recovery Tips:</h3>
            <ul class="tips-list">
              ${workout.tips.map((tip) => `<li>${tip}</li>`).join("")}
            </ul>
          </div>
          
          <div class="rest-quote">
            <p>"Recovery is not a sign of weakness, it's the foundation of strength."</p>
          </div>
        </div>
      </div>
    `;
        workoutContent.innerHTML = restHTML;
    } else {
        // Render workout day content
        const workoutHTML = `
      <div class="workout-day active">
        <div class="workout-header">
          <h2 class="workout-title">${workout.day}: ${workout.name}</h2>
          <p class="workout-focus">${workout.focus}</p>
        </div>
        
        <div class="rep-scheme-explanation">
          <h3>Rep Scheme Guide:</h3>
          <div class="rep-scheme-grid">
            <div class="rep-scheme-item">
              <span class="set-number">Set 1:</span>
              <span class="rep-count">12 reps</span>
              <span class="weight-desc">Low weight (warm-up)</span>
            </div>
            <div class="rep-scheme-item">
              <span class="set-number">Set 2:</span>
              <span class="rep-count">8 reps</span>
              <span class="weight-desc">Working weight</span>
            </div>
            <div class="rep-scheme-item">
              <span class="set-number">Set 3:</span>
              <span class="rep-count">7 reps</span>
              <span class="weight-desc">Same weight as set 2</span>
            </div>
            <div class="rep-scheme-item">
              <span class="set-number">Set 4:</span>
              <span class="rep-count">5 reps</span>
              <span class="weight-desc">Heavy (one rep max approach)</span>
            </div>
          </div>
        </div>
        
        <div class="exercises-table">
          <div class="table-header">
            <div>Exercise</div>
            <div>Sets</div>
            <div>Reps</div>
            <div>Notes</div>
            <div>How To</div>
          </div>
          ${workout.exercises
              .map(
                  (exercise, index) => `
            <div class="exercise-row" style="animation-delay: ${index * 0.1}s">
              <div class="exercise-name">${exercise.name}</div>
              <div class="exercise-detail">${exercise.sets}</div>
              <div class="exercise-detail exercise-reps">${exercise.reps}</div>
              <div class="exercise-detail exercise-notes">${
                  exercise.notes
              }</div>
              <div class="exercise-detail">
                <button class="youtube-btn" onclick="openYouTubeVideo('${
                    exercise.youtube
                }')" title="Watch demonstration on YouTube">
                  <span class="play-icon">▶️</span>
                  <span class="btn-text">How To</span>
                </button>
              </div>
            </div>
          `
              )
              .join("")}
        </div>
        
        <div class="workout-summary">
          <p style="text-align: center; margin-top: 24px; color: var(--color-text-secondary); font-style: italic;">
            💡 Progressive overload: Start light for warm-up, build to working weight, then challenge yourself with heavy weight for the final set. Click "How To" buttons to watch exercise demonstrations.
          </p>
        </div>
      </div>
    `;
        workoutContent.innerHTML = workoutHTML;
    }
}

// Handle window resize for responsive updates
window.addEventListener(
    "resize",
    debounce(() => {
        renderWorkoutContent();
    }, 250)
);

// Debounce utility function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add loading state and touch gestures
document.addEventListener("DOMContentLoaded", function () {
    // Add loading state
    workoutContent.innerHTML = '<div class="loading">Loading workout...</div>';

    // Simulate brief loading for smooth transition
    setTimeout(() => {
        initializeApp();
    }, 100);

    // Add touch gesture support for mobile swiping
    let startX = 0;
    let endX = 0;

    workoutContent.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });

    workoutContent.addEventListener("touchend", (e) => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });

    function handleSwipe() {
        const threshold = 50;
        const diff = startX - endX;

        if (Math.abs(diff) > threshold) {
            if (
                diff > 0 &&
                currentWorkoutIndex <
                    workoutData.workoutSplit.workouts.length - 1
            ) {
                // Swipe left - next workout
                switchToWorkout(currentWorkoutIndex + 1);
            } else if (diff < 0 && currentWorkoutIndex > 0) {
                // Swipe right - previous workout
                switchToWorkout(currentWorkoutIndex - 1);
            }
        }
    }
});

// Add interactive feedback to nav tabs
document.addEventListener("DOMContentLoaded", function () {
    navTabs.forEach((tab) => {
        tab.addEventListener("mousedown", () => {
            tab.style.transform = "translateY(0px) scale(0.98)";
        });

        tab.addEventListener("mouseup", () => {
            tab.style.transform = "translateY(-2px) scale(1)";
        });

        tab.addEventListener("mouseleave", () => {
            tab.style.transform = "translateY(-2px) scale(1)";
        });
    });
});

// Export for potential future use
window.ULPPLApp = {
    switchToWorkout,
    getCurrentWorkout: () =>
        workoutData.workoutSplit.workouts[currentWorkoutIndex],
    getCurrentIndex: () => currentWorkoutIndex,
    getTotalWorkouts: () => workoutData.workoutSplit.workouts.length,
    openYouTubeVideo,
};
