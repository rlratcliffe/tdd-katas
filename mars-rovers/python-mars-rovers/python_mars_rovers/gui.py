from nicegui import ui
from plateau import Plateau

plateau = Plateau(5, 3)
height = plateau.getHeight()
width = plateau.getWidth()

ui.label('The plateau height is ' + str(height))

with ui.grid(columns=height, rows=width):
    for x in reversed(range(0, width)):
        for y in range(0, height):
            if x == 0 and y == 1:
                ui.label('🦊').classes('border p-1')
            else:
                ui.label('').classes('border p-1')
    

ui.run()