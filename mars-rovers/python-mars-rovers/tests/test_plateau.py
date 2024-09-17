from python_mars_rovers.plateau import Plateau

def test_plateau_getWidth():
	assert Plateau(5, 2).getWidth() == 5

def test_plateau_getHeight():
	assert Plateau(5, 3).getHeight() == 3