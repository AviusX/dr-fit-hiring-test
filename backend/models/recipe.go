package models

type Ingredient struct {
	Name   string `json:"name"`
	Weight int    `json:"weight"`
	Unit   string `json:"unit"`
}

type Recipe struct {
	ID          int          `json:"id"`
	Title       string       `json:"title"`
	Image       *string      `json:"image"`
	PrepTime    int          `json:"prep_time"`
	Ingredients []Ingredient `json:"ingredients"`
}
