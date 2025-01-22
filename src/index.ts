import attendanceController from "./Controller/attendanceController";
import authController from "./Controller/authController";
import locationController from "./Controller/locationController";
import shiftController from "./Controller/shiftController";
import userController from "./Controller/userController";
import workdayController from "./Controller/workdayController";
import employeesController from "./Controller/employeesController";
import appHono from "./honoApp";

appHono.get('/', async (c) => {
	return c.json({ message: 'Hello World!' });
}
);

appHono.route('/api',authController)
appHono.route('/api',userController)
appHono.route('/api',employeesController)
appHono.route('/api',locationController)
appHono.route('/api',shiftController)
appHono.route('/api',workdayController)
appHono.route('/api',attendanceController)
appHono.route('/api',shiftController)


export default appHono