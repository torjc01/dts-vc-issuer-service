using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Immunization.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ImmunizationController : ControllerBase
    {

        private readonly ILogger<ImmunizationController> _logger;

        public ImmunizationController(ILogger<ImmunizationController> logger)
        {
            _logger = logger;
        }

        [HttpGet("{id}")] // GET Matches api/Immunization/{id}
        [Produces("application/json")]
        public Immunization GetImmunization(string immunizationId)
        {
        }

        [HttpGet] // GET  api/Immunization?patient=39393993
        [Produces("application/json")]
        public IEnumerable<Immunization> GetImmunizationRecords([FromUri] string patient)
        {
        }
    }
}
