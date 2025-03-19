using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using mission11.API.Data;

namespace mission11.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private BookDbContext _bookContext;
        public BookController(BookDbContext temp) => _bookContext = temp;

        public IActionResult Get(int pageHowMany = 5, int pageNum = 1)
        {
            var something = _bookContext.Books
                .Skip((pageNum-1) * pageHowMany)
                .Take(pageHowMany)
                .ToList();

            var totalNumBooks = _bookContext.Books.Count();

            return Ok(new
            {
                Books = something,
                TotalNumBooks = totalNumBooks
            });
        }
    }
}