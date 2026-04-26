#include "dungeon-events.h"
#include "game-world.h"  // Assuming this file contains necessary game state information

// Event frequency and cooldown constants
#define EVENT_TRIGGER_FREQUENCY 100  // Trigger an event on average every 100 turns
#define EVENT_COOLDOWN_DURATION 50   // Minimum turns between events

// Messages for atmospheric events
static const char *atmospheric_messages[] = {
    "You hear distant footsteps echoing through the halls.",
    "A ghostly wail reverberates from somewhere deep within the dungeon.",
    "A chill wind blows through the area, carrying whispers of the past.",
    "The air grows still and eerily silent, as if the dungeon itself is holding its breath."
};

// State variables
static int last_event_turn = -EVENT_COOLDOWN_DURATION;  // Initialize to allow immediate first event

// Function to check and trigger an event
void try_trigger_dungeon_event(int current_turn, int dungeon_depth) {
    // Avoid triggering events on dungeon level 0 (town)
    if (dungeon_depth <= 0) {
        return;
    }

    // Calculate turns since the last event
    int turns_since_last_event = current_turn - last_event_turn;

    // Check if we are ready to trigger another event
    if (turns_since_last_event >= EVENT_COOLDOWN_DURATION) {
        // Random chance to trigger an event
        if (rand() % EVENT_TRIGGER_FREQUENCY == 0) {
            // Choose a random event message
            int message_index = rand() % (sizeof(atmospheric_messages) / sizeof(atmospheric_messages[0]));
            const char *message = atmospheric_messages[message_index];

            // Use the game's messaging system to show the event message
            msg_print(message);

            // Update the turn when the last event was triggered
            last_event_turn = current_turn;
        }
    }
}
