using System.ComponentModel.DataAnnotations;

namespace Repuestos_San_jorge.Models
{
    public class User
    {
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

        [Required]
        public string salt { get; set; }

        public int roleId { get; set; }
        public Role role { get; set; }
        public Client client { get; set; }
        public Seller seller { get; set; }

        public User()
        {
            name = "";
            lastName = "";
            email = "";
            password = "";
            salt = "";
            client = new Client();
            role = new Role();
            seller = new Seller();
        }
    }
}
