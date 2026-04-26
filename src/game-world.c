#include "game-world.h"
#include "dungeon-events.h"

void process_player_turn() {
    // Existing player turn logic...

    int current_turn = get_current_turn();
    int dungeon_depth = get_dungeon_depth();

    // Attempt to trigger a dungeon event
    try_trigger_dungeon_event(current_turn, dungeon_depth);

    // Continue with the rest of the turn processing...
}
