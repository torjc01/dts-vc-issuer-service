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
namespace Immunization.Models
{
    using System.Collections.Generic;
    using System.Text.Json.Serialization;

    /// <summary>
    /// Represents Immunization Result.
    /// </summary>
    public class Patient
    {
        /// <summary>
        /// Gets or sets the Load State.
        /// </summary>
        [JsonPropertyName("fullName")]
        public string FullName { get; set; }

        /// <summary>
        /// Gets or sets the list of Immunizations events.
        /// </summary>
        [JsonPropertyName("birthDate")]
        public string BirthDate { get; set; }

        /// <summary>
        /// Gets or sets the list of Immunizations recommendations.
        /// </summary>
        [JsonPropertyName("identifier")]
        public Identifier { get; set; }
    }
}
