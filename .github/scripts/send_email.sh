sudo apt-get install -y mailutils
echo "EMAIL_DESTINO=$EMAIL_DESTINO"
echo "Sending e-mail" | mail -s "Pipeline" "$EMAIL_DESTINO"