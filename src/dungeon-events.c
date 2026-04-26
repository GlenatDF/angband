#include "dungeon-events.h"
#include <stdlib.h>
#include "message.h"

#define EVENT_FREQUENCY 1000
#define COOLDOWN_DURATION 50

static int event_cooldown = 0;

static const char *events[] = {
    "You hear distant footsteps echoing in the halls.",
    "A cold wind blows from deeper within the dungeon.",
    "The air seems to shimmer momentarily.",
    "You feel the floor tremble slightly beneath you."
};

void trigger_dungeon_event(void) {
    if (event_cooldown > 0) {
        event_cooldown--;
        return;
    }

    if (rand() % EVENT_FREQUENCY == 0) {
        int event_index = rand() % (sizeof(events) / sizeof(events[0]));
        msg_print(events[event_index]);
        event_cooldown = COOLDOWN_DURATION;
    }
}
