using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace Issuer.Models
{
    [Table("Credential")]
    public class Credential : BaseAuditable
    {
        [Key]
        public int Id { get; set; }

        [JsonIgnore]
        public int ConnectionId { get; set; }

        [JsonIgnore]
        public Connection Connection { get; set; }

        [JsonIgnore]
        public int IdentifierId { get; set; }

        [JsonIgnore]
        public Identifier Identifier { get; set; }

        [JsonIgnore]
        public string SchemaId { get; set; }

        [JsonIgnore]
        public string CredentialExchangeId { get; set; }

        [JsonIgnore]
        public string CredentialDefinitionId { get; set; }


        public DateTimeOffset? AcceptedCredentialDate { get; set; }


        [JsonIgnore]
        public DateTimeOffset? RevokedCredentialDate { get; set; }
    }
}
