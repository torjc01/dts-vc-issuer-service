namespace ImmunizationApi.Models.Entity
{
        using System.ComponentModel.DataAnnotations;

    public class VaccineEntity
    {
        [Key]
        public string Id { get; set; }
        public string Name { get; set; }
        public string GenericName { get; set; }
        public string Manufacturer { get; set; }
        public string Disease { get; set; }

        // Gets or sets the World Health Organization ATC Code for this vaccine.
        public string AtcCode { get; set; }
    }
}
