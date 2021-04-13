using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Issuer.Models.Api
{
    public class ImmunizationResponse
    {
        public string FullUrl { get; set; }

        public string RecordIdentifier { get; set; }

        public PatientResponse Patient { get; set; } = new PatientResponse();

        public VaccineResponse Vaccine { get; set; } = new VaccineResponse();

        public string LotNumber { get; set; }

        public string VaccinationDate { get; set; }

        public int DoseNumber { get; set; }

        public string CountryOfVaccination { get; set; }

        public string Facility { get; set; }

        public string NextVaccinationDueDate { get; set; }

    }
}
