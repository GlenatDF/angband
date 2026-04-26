#include "game-world.h"
#include "player.h"

static int current_turn = 0;

int get_current_turn(void) {
    return current_turn;
}

int player_in_dungeon(void) {
    // Simplified example, real implementation might check actual level type
    return 1; // Assume player is always in dungeon for this example
}

void increment_turn(void) {
    current_turn++;
}
