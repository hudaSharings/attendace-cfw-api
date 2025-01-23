import { user, organizations, organizationUsers, shift, shiftSplit, workDayPeriod, workDaySetup, location, client, employee } from "./schema";
export const tables = {
    users: user,
    organizations,
    organizationUsers,
    shifts: shift,
    shiftSplits: shiftSplit,
    workDayPeriods: workDayPeriod,
    workDaySetups: workDaySetup,
    locations:location,
    clients:client,
    employees:employee
}

export default tables