using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Repuestos_San_jorge.Models
{
    public class User
    {
        [Key]
        public int id { get; set; }

        [Required]
        public string name { get; set; }

        [Required]
        public string lastName { get; set; }

        [Required]
        [EmailAddress]
        public string email { get; set; }

        [Required]
        public string password { get; set; }

        [DefaultValue(true)]
        public Boolean status { get; set; }

        public int roleId { get; set; }

        [ForeignKey("roleId")]
        public Role? role { get; set; }
        public Client? client { get; set; }
        public Seller? seller { get; set; }

        public User()
        {
            // name = "";
            // lastName = "";
            // email = "";
            // password = "";
            status = true;
            // role = new Role();
            // client = new Client();
            // seller = new Seller();
        }
    }
}
