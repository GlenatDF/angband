CC = gcc
CFLAGS = -Wall -g

SRC = main.c \
      player.c \
      dungeon-events.c \
      game-world.c \
      messages.c

OBJ = $(SRC:.c=.o)

all: angband

angband: $(OBJ)
	$(CC) -o $@ $^ $(CFLAGS)

clean:
	rm -f *.o angband
