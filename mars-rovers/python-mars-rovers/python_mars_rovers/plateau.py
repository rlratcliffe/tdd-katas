class Plateau:
	def __init__(self, xbound, ybound):
		self.xbound = xbound
		self.ybound = ybound

	def getWidth(self):
		return self.xbound

	def getHeight(self):
		return self.ybound

	def computeGrid(self):
		array = []

		for x in range(0, self.xbound):
			cols = []
			for y in range(0, self.ybound):
					cols.append('')
			array.append(cols)

		return array
