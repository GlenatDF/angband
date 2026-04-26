# Existing makefile content...

OBJS = src/main.o src/dungeon_event_director.o src/player_turn.o
# Other existing objects...

main: $(OBJS)
	$(CC) -o main $(OBJS) $(CFLAGS)
