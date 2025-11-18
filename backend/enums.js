// completed, scheduled, canceled, rescheduled, confirmed, unconfirmed, missed (enum?)
const APPT_STATUS = {
    COMPLETE: "completed",
    SCHEDULED: "scheduled",
    CANCELED: "canceled",
    RESCHEDULED: "rescheduled",
    CONFIRMED: "confirmed",
    UNCONFIRMED: "unconfirmed",
    MISSED: "missed"
}

const APPT_TAX_TYPE = {
    IND: "individal",
    BUS: "business"
}

const APP_TYPE = {
    ONL: "Online",
    INP: "In-Person"
}

const EMP_ROLES = {
TP: "Tax Preparer", 
TS: "Tech Support",
M: "Manager",

}

export default {APPT_STATUS, APPT_TAX_TYPE, APP_TYPE, EMP_ROLES}