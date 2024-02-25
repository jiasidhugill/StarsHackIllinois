extends Line2D
#
#@export_category('Trail')
##@onready var trail = $Sprite2D
#
#@onready var parent : Node2D = get_parent()
#var offset : = Vector2.ZERO
#var drawing = false
#
#func _ready() -> void:
	#offset = position
	#top_level = true
#
#func _physics_process(_delta: float) -> void:
	#global_position = Vector2.ZERO
#
	#var point : = parent.global_position + offset
	##self.color = #Color(255, 1, 1)
	#add_point(point, 0)
	#
	##trail.modulate = Color(255,255,0)
	#
	#if Input.is_action_pressed("line_startstop"):
		#drawing = true
	#else: 
		#drawing = false
		##breakLine()
		## If spacebar is not pressed, break the line
#
		#
#
