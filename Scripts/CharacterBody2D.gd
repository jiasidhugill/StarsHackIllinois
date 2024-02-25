extends CharacterBody2D

@export var speed = 200
@export var rotation_speed = 10
@onready var sprite = $Sprite2D
@onready var label = $CanvasLayer/Label

func _physics_process(delta):
	var xdir = 0
	if Input.is_action_pressed("left"): 
		xdir -= 1
	if Input.is_action_pressed("right"): 
		xdir += 1
	velocity.x = xdir * speed
	
	var ydir = 0;
	if Input.is_action_pressed("up"): 
		ydir -= 1
		sprite.flip_v = 0
	if Input.is_action_pressed("down"): 
		ydir += 1
		sprite.flip_v = -1
	velocity.y = ydir * speed
	
	move_and_slide()
