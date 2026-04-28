#include "dungeon-events.h"
#include "z-msg.h"

static int last_event_turn = 0;
static const int EVENT_FREQUENCY = 600;
static const char *event_messages[] = {
    "You hear distant echoes of battle.",
    "A chill runs down your spine.",
    "You sense something watching you in the darkness.",
    "An eerie silence falls over the area."
};

void dungeon_event_director_on_turn(int current_turn, int player_depth) {
    if (player_depth <= 0) return;  // No events in town or non-dungeon levels

    if (current_turn - last_event_turn < EVENT_FREQUENCY) return;

    int chance = rand() % EVENT_FREQUENCY;
    if (chance != 0) return;

    last_event_turn = current_turn;

    const char *message = event_messages[rand() % (sizeof(event_messages) / sizeof(event_messages[0]))];
    msg(message);
}