package models

import (
	"time"

	"gorm.io/gorm"
)

type Invoice struct {
	gorm.Model
	Logo          string        `json:"logo"`
	Message       string        `json:"message"`
	DueTerm       time.Time     `json:"due_term"`
	InvoiceDate   time.Time     `json:"invoice_date"`
	InvoiceNumber string        `json:"invoice_no"`
	JobData       string        `json:"job_data"`
	ClientData    ClientInvoice `gorm:"foreignKey:InvoiceID" json:"invoice_client_data"`
	UserID        int           `json:"user_id"`
}
