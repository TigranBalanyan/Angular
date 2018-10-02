function DateTime()
{
    var userLocal = Xrm.Page.getAttribute("new_date").getValue();
    alert("Local Date " + userLocal);
    
    alert("UTC -- " + userLocal.toUTCString());

    var UTCdate =new Date(userLocal.toUTCString());

    alert('Local again -- ' + UTCdate);

//    Xrm.Page.getAttribute("new_date").setValue(userLocal.setHours(userLocal.getHours()-4));
   // Xrm.Page.getAttribute("new_date").setValue(userLocal.setHours(userLocal.getHours()-4));

    var dateOnly = Xrm.Page.getAttribute("new_dateonly").getValue();
    alert("Date Only -- " + dateOnly);
    Xrm.Page.getAttribute("new_dateonly").setValue(userLocal.setHours(dateOnly.getHours() + 4));
    alert("Date Only after change -- "  + Xrm.Page.getAttribute("new_dateonly").getValue());


    var timeZoneIndependent = Xrm.Page.getAttribute("new_timezoneindependent").getValue();
    alert("Time Zone Independent -- " + timeZoneIndependent);

 /*   
    var dateOnly = Xrm.Page.getAttribute("new_date").getValue();
    var date = new Date(dateOnly.toUTCString);
    
    Xrm.Page.getAttribute("new_timezoneindependent").setValue(currentDateTime.setDate(currentDateTime.getDate() + 1));
    var timeZoneIndependent = Xrm.Page.getAttribute("new_timezoneindependent").getValue();

    alert("Time Zone Independent -- " + timeZoneIndependent);
*/
}