#include "dungeon_event_director.h"
#include "game_event.h"
#include "messages.h"
#include <stdbool.h>
#include <stdlib.h>
#include <time.h>

#define EVENT_FREQUENCY 50  // Represents a 1 in 50 chance
#define EVENT_COOLDOWN 100  // Minimum turns between events

static int last_event_turn = -EVENT_COOLDOWN;

void check_dungeon_event(void) {
    int current_turn = game_turn();
    if (current_turn - last_event_turn < EVENT_COOLDOWN) {
        return;
    }

    if (rand() % EVENT_FREQUENCY == 0) {
        msg("You feel a chill run down your spine...");
        last_event_turn = current_turn;
    }
}

__attribute__((constructor)) void init_random() {
    srand(time(NULL));
}
