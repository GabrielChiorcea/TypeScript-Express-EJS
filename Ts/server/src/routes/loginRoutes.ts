import { Router, NextFunction } from "express";
import { Request, Response } from "express";
////////////////////////////////////////////////////////////////// req: Request, res: Response



interface RequestWithBody extends Request{
    body: {[key: string]:string | undefined}

}


function requireAuth( req: Request, res: Response, next: NextFunction):void {
    if(req.session && req.session.loggedIn){
        next()
        return;
    }

    res.status(403)
    res.send('Not permitted')
}

const router = Router()




router.get("/login", (req: Request, res: Response)=>{
res.send(`
    <form method="POST">
        <div>
           <label>Email</label>
           <input name="email"/>
        </div>
        <div>
            <label>Password</label>
            <input name="password" type="password"
        </div>
            <button>Submit</button>
    </form>`
)
})

router.post('/login', (req: RequestWithBody, res: Response)=>{
    const {email, password} = req.body
if(email && password && email === "cg@gmail.com" && password === "mmmm"){
//mark the person as logged in
req.session = { loggedIn: true}
// redirect them to the root route
res.redirect("/")
    
}
})
  

router.get('/', (req: Request, res: Response) =>{
   if(req.session && req.session.loggedIn){
    res.send(
    `<div>
        <div>You Are logged in</div>
        <a href="/logout">Logout</a>
        <a href="/protected">Protected</a>
    </div>
    `
    
    )
   }else{
    res.send(`
        <div>
            <div>You Are not logged in </div>
            <a href="/login">Log in</a>
        
        </div> `
  ) }
} )

router.get('/logout', (req: Request, res: Response) =>{
    req.session = undefined
    res.redirect('/')
})


router.get('/protected', requireAuth, (req: Request, res: Response)=>{
    res.send(`
    
        <div><h1>You are log in and have permesion</h1></div>    
    `
)

} )

export {router}