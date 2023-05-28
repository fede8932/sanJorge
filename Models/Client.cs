using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using Repuestos_San_jorge.Dto.Enums;

namespace Repuestos_San_jorge.Models
{
    public class Client
    {
        [Key]
        public int id { get; set; }

        [Required]
        public string razonSocial { get; set; }

        [Required]
        [RegularExpression(@"^\d{2}-\d{8}-\d{1}$", ErrorMessage = "El CUIT debe tener el formato XX-XXXXXXXX-X")]
        public string cuit { get; set; }

        [Required]
        public string calle { get; set; }

        [Required]
        public int altura { get; set; }

        [Required]
        public string coordenadas { get; set; }

        [Required]
        public string localidad { get; set; }

        [Required]
        public int codigoPostal { get; set; }

        [Required]
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public IvaType iva { get; set; }

        [Required]
        [RegularExpression(@"^\d{10}$")]
        public string telefono { get; set; }

        [StringLength(300)]
        public string? comentarios { get; set; }
        
        [Required]
        public int userId { get; set; }

        [ForeignKey("userId")]
        public User? user { get; set; }

        public ICollection<Schedule>? schedules { get; set; }

        [Required]
        public int sellerId { get; set; }

        [ForeignKey("sellerId")]
        public Seller? seller { get; set; }

        public int? currentAcountId { get; set; }

        [ForeignKey("currentAcountId")]
        public CurrentAcount? currentAcount { get; set; }

        public ICollection<CustomerDiscount>? customerDiscounts { get; set; }
    }
}
