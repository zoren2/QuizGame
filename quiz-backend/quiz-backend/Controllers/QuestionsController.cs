using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace quiz_backend.Controllers
{
    [Produces("application/json")]
    [Route("api/Questions")]
    [ApiController]
    public class QuestionsController : ControllerBase
    {
        readonly QuizContext context;
        public QuestionsController(QuizContext context)
        {
            this.context = context;
        }

        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<Models.Question>> Get()
        {
            return new Models.Question[]
            {
                new Models.Question(){Text = "hello"},
                new Models.Question(){Text = "hi"}
            };
        }



        // POST api/values
        [HttpPost]
        public void Post([FromBody] Models.Question question)
        {
            _ = context.Questions.Add(new Models.Question() { Text = "test" });
            _ = context.SaveChanges();
        }


        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}