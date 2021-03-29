function showEvent(event, eventImageId, eventDetailsId) {
    const events = document.getElementsByClassName("event-list-item");
    const eventImages = document.getElementsByClassName("event-image");
    const eventDetails = document.getElementsByClassName("event-details");
    let i;

    // Schließe alle Details, wenn ein Event im Menü geklickt wird.
    for (i = 0; i < eventDetails.length; i++) {
        eventDetails[i].style.display = "none";
        eventImages[i].style.display = "none";
    }

    // Nimm active-class weg, wenn sie in diesem Event existiert.
    for (i = 0; i < events.length; i++) {
        events[i].className = events[i].className.replace("active", "");
    }

    // Zeige aktives Event an.
    document.getElementById(eventImageId).style.display = "block";
    document.getElementById(eventDetailsId).style.display = "block";
    event.currentTarget.className += " active";
}

