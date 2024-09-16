from python_mars_rovers.plateau import Plateau

def test_init():
	assert Plateau(5).getWidth() == 6
