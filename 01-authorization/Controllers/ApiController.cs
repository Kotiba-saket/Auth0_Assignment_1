using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace WebAPIApplication.Controllers
{
    [Route("api")]
    [ApiController]
    
    public class ApiController : ControllerBase
    {
        [HttpGet("private-scoped")]
        [Authorize("read:string")]
        [EnableCors("AllowSpecificOrigin")]
        public IActionResult Scoped()
        {
            return Ok(new
            {
                Message = "You are authorized and you have the needed permission to access this message From the {Back end} Congratulation."
            });
        }
    }
}
