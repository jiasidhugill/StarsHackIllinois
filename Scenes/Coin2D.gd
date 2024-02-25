extends Area2D

func _on_Aread2D_body_entered(body): 
	body.score += 1
	free()
	self.queue_free()
