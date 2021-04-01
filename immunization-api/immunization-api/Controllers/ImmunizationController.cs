using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using ImmunizationApi.Models;

namespace ImmunizationApi.Controllers
{
    /// <summary>
    /// The Immunization controller.
    /// </summary>

    //[Authorize]
    [ApiVersion("1.0")]
    [Route("v{version:apiVersion}/api/[controller]")]
    [ApiController]
    public class ImmunizationController : ControllerBase
    {

        private readonly ILogger<ImmunizationController> _logger;

        /// <summary>
        /// Gets or sets the immunization data service.
        /// </summary>
        private readonly IImmunizationDataService dataService;

        public ImmunizationController(ILogger<ImmunizationController> logger)
        {
            _logger = logger;
        }

        [HttpGet("{id}")] // GET Matches api/Immunization/{id}
        [Produces("application/json")]
        public ImmunizationRecord GetImmunization(string immunizationId)
        {
            return new ImmunizationRecord();
        }

        [HttpGet] // GET  api/Immunization?patient=39393993
        [Produces("application/json")]
        public IEnumerable<ImmunizationRecord> GetImmunizationRecords(string patient)
        {
            List<ImmunizationRecord> list  = new List<ImmunizationRecord>();
            list.Add(new ImmunizationRecord());
            return list;
            
        }
    }
}
