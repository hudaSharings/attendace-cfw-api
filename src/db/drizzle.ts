import { user, organizations, organizationUsers, shift, shiftSplit, workDayPeriod, workDaySetup, location } from "./schema";
export const tables = {
    users: user,
    organizations,
    organizationUsers,
    shifts: shift,
    shiftSplits: shiftSplit,
    workDayPeriods: workDayPeriod,
    workDaySetups: workDaySetup,
    locations:location
}

export default tables