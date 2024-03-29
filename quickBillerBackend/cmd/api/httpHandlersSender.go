package main

import (
	"net/http"
	"quickBiller/internal/models"

	"github.com/go-chi/chi/v5"
)

func (app *application) GetSenderDataByUserID(w http.ResponseWriter, r *http.Request) {
	userIDUrlParams := chi.URLParam(r, "user_id")
	senderData, err := app.Repository.GetSenderByUserID(userIDUrlParams)
	if err != nil {
		app.errorJSON(w, err)
		return
	}

	response := JSONResponse{Data: senderData}
	_ = app.writeJSON(w, http.StatusOK, response)
}

func (app *application) InsertSenderData(w http.ResponseWriter, r *http.Request) {
	var payload *models.Sender
	err := app.readJSON(w, r, &payload)
	if err != nil {
		app.errorJSON(w, err)
		return
	}

	senderID, err := app.Repository.InserSender(payload)
	if err != nil {
		app.errorJSON(w, err)
		return
	}

	response := JSONResponse{Data: senderID, Message: "sender successfully created"}
	_ = app.writeJSON(w, http.StatusCreated, response)
}

func (app *application) ModifySender(w http.ResponseWriter, r *http.Request) {
	var payload *models.Sender
	err := app.readJSON(w, r, &payload)
	if err != nil {
		app.errorJSON(w, err)
		return
	}

	senderData, err := app.Repository.GetSenderByUserID(payload.UserID)
	if err != nil {
		app.errorJSON(w, err)
		return
	}

	senderData.CompanyName = payload.CompanyName
	senderData.ContactName = payload.ContactName
	senderData.Email = payload.Email
	senderData.Street = payload.Street
	senderData.Postcode = payload.Postcode
	senderData.City = payload.City
	senderData.Country = payload.Country
	senderData.CocNo = payload.CocNo
	senderData.VatNo = payload.VatNo
	senderData.Iban = payload.Iban

	senderID, err := app.Repository.UpdateSenderByID(int(senderData.ID), payload)
	if err != nil {
		app.errorJSON(w, err)
		return
	}

	response := JSONResponse{Message: "sender data successfully updated", Data: senderID}
	_ = app.writeJSON(w, http.StatusOK, response)
}
