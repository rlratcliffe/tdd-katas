from nicegui import ui
from plateau import Plateau

plateau = Plateau(5, 4)
height = plateau.getHeight()
width = plateau.getWidth()

ui.label('The plateau height is ' + str(height))

ui.run()