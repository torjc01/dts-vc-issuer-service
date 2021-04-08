using System.Threading.Tasks;
using Newtonsoft.Json.Linq;

using Issuer.Models;

namespace Issuer.Services
{
    public interface IVerifiableCredentialService
    {
        Task<Connection> CreateConnectionAsync(Patient patient, string[] urls);
        Task<bool> WebhookAsync(JObject data, string topic);
        Task<bool> RevokeCredentialsAsync(int patientId);
    }
}
