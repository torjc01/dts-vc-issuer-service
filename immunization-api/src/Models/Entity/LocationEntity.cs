namespace ImmunizationApi.Models.Entity
{
    using System;
    using System.Collections.Generic;
    using Microsoft.EntityFrameworkCore;

    public class LocationEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string StreetLine1 { get; set; }
        public string StreetLine2 { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string PostalCode { get; set; }
    }
}