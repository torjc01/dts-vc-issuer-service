namespace ImmunizationApi.Models.Entity
{
    using System;
    using Microsoft.EntityFrameworkCore;

    /// <summary>
    /// Represents basic Patient or Subject Information
    /// </summary>
    public class ImmunizationEntity
    {
        public Guid Id { get; set; }
        public DateTime AdministeredOnDate { get; set; }
        public DateTime NextDueDate { get; set; }
        public string LotNumber { get; set; }
        public int DoseNumber { get; set; }

        public virtual PatientEntity Patient { get; set; }
        public virtual VaccineEntity Vaccine { get; set; }
        public virtual LocationEntity AdministeredAt { get; set; }
    }
}