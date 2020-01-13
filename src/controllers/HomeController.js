class HomeController {
    constructor() {
        this.message = 'Hello World!'
    }

    index(req, res, next) {
        res.send({
            'message': this.message
        })
    }
}

export default HomeController;
