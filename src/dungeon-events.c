#include "dungeon-events.h"
#include "game-world.h"
#include "messages.h"
#include "player.h"

#define EVENT_FREQUENCY 1000
#define COOLDOWN_TURNS 500

static int last_event_turn = 0;

void trigger_dungeon_event(void) {
    if (!player_in_dungeon()) return;

    int current_turn = get_current_turn();
    if (current_turn - last_event_turn < COOLDOWN_TURNS) return;

    if (rand() % EVENT_FREQUENCY == 0) {
        last_event_turn = current_turn;
        msg("You hear distant echoes..."); // Example message
    }
}
