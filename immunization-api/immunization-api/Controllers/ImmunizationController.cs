//-------------------------------------------------------------------------
// Copyright © 2021 Province of British Columbia
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//-------------------------------------------------------------------------
namespace ImmunizationApi.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    using Microsoft.AspNetCore.Authentication;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Logging;

    using ImmunizationApi.Models;
    /// <summary>
    /// The Immunization controller.
    /// </summary>

    //[Authorize]
    [Route("[controller]")]
    [ApiController]
    public class ImmunizationController : ControllerBase
    {

        private readonly ILogger<ImmunizationController> _logger;

        /// <summary>
        /// Gets or sets the immunization data service.
        /// </summary>
        //private readonly IImmunizationDataService dataService;

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
